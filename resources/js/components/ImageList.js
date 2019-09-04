import axios from 'axios'
import React, { Component } from 'react'
import SVGIcon from "./SVGIcon";

class ImagesList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            images: [],
            activeImg:0
        }
        this.imageClick = this.imageClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
        this.restoreClick = this.restoreClick.bind(this)
    }
    
    imageClick(id,url){
        if(id!=this.state.activeImg){
            this.setState({activeImg:id});
            if(!this.props.isDeleted)document.getElementById('down-link').href=url;
            document.getElementById("options").classList.add('open');
            console.log(document.getElementsByClassName("imgopen"));
            if(document.getElementsByClassName("imgopen").length>0)document.getElementsByClassName("imgopen")[0].classList.remove('imgopen');
            document.getElementById("img-"+id).classList.add('imgopen');
        }
    }
    
    deleteClick(e){
        e.stopPropagation();
        let img = this.state.activeImg;
        const sure = confirm('Are you sure you want to delete this image?');
        if(img && sure){
           axios.put(`/api/images/delete/${img}`)
        .then(response => (document.getElementById("img-"+img).remove(),document.getElementById("options").classList.remove('open'),this.setState({activeImg:0})))
        }
    }
    
    restoreClick(e){
        e.stopPropagation();
        let img = this.state.activeImg;
        if(img){
           axios.put(`/api/images/restore/${img}`)
        .then(response => (document.getElementById("img-"+img).remove(),document.getElementById("options").classList.remove('open'),this.setState({activeImg:0})))
        }
    }
    
    componentDidMount () {
        if(this.props.isDeleted){
           axios.get('/api/images/del').then(response => {
          this.setState({
            images: response.data
          })
        })
           }else{
        axios.get('/api/images').then(response => {
          this.setState({
            images: response.data
          })
        })
    }
      }

    render () {
        const { images } = this.state;
        const isDeleted = this.props.isDeleted;
        let opt = isDeleted ? <React.Fragment><a className='restore' onClick={this.restoreClick}><SVGIcon name="restore" /></a></React.Fragment> : <React.Fragment><a className='delete' onClick={this.deleteClick}><SVGIcon name="delete" /></a><a id='down-link' href='#' className='download' download><SVGIcon name="download" /></a></React.Fragment>;
        return (
          <div>
            <div className='links'>
                <a className={isDeleted ? '':'active'} href='/'>Active</a>
                <a className={isDeleted ? 'active':''} href='/deleted/'>Deleted</a>
            </div>
                    <ul>
                      {images.map(image => (
                        <React.Fragment key={image.id}>
            <li id={'img-'+image.id} key={image.id} onClick={this.imageClick.bind(this,image.id,image.img_url)}>
                          <div className='image' style={{backgroundImage:`url(${image.img_url})`}}></div>
                            <h3>{image.title}</h3>
            </li>
                        </React.Fragment>
                      ))}
                    </ul>
<div id='options'><section>{opt}</section></div>
          </div>
        )
      }
    }

    export default ImagesList