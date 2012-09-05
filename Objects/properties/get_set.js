var Book = {
	title:'The JavaScript Cookbook',
	get booktitle(){
		return this.title;
	},
	set booktitle(val){
		this.title = val;
	}
}

Book.booktitle = 'JavaScript pattern';
console.log(Book.booktitle);