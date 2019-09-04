<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        if($this->command->confirm('Refresh the database too?')){
            $this->command->call('migrate:refresh');
            $this->command->line('Refreshed the database');
        }
        $images = [['title'=>'Partnership rationale','img_url'=>'/images/image-3.jpg','created_at' => date('Y-m-d H:i:s'),'updated_at' => date('Y-m-d H:i:s')],['title'=>'Partnership rationale','img_url'=>'/images/image-2.jpg','created_at' => date('Y-m-d H:i:s'),'updated_at' => date('Y-m-d H:i:s')],['title'=>'Who we are','img_url'=>'/images/image-1.jpg','created_at' => date('Y-m-d H:i:s'),'updated_at' => date('Y-m-d H:i:s')],['title'=>'Our clubs','img_url'=>'/images/image-5.jpg','created_at' => date('Y-m-d H:i:s'),'updated_at' => date('Y-m-d H:i:s')],['title'=>'The opportunity','img_url'=>'/images/image-4.jpg','created_at' => date('Y-m-d H:i:s'),'updated_at' => date('Y-m-d H:i:s')],['title'=>'Our clubs','img_url'=>'/images/image-5.png','created_at' => date('Y-m-d H:i:s'),'updated_at' => date('Y-m-d H:i:s')]];
        DB::table('images')->insert($images);
    }
}
