/**
 * Created by Kondoff on 05-Nov-16.
 */
function solve() {
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content)
            this.likes=likes;
            this.dislikes=dislikes;
            this.comment=[]
        }
        addComment(comment){
            return this.comment.push(comment)
        }

        toString(){
            let baseString=`${super.toString()}\nRating: ${this.likes - this.dislikes}`;

            if(this.comment.length>0){
                baseString+=`\nComments:\n`;
                for(let comm of this.comment){
                    baseString+=` * ${comm}\n`
                }
            }

            return baseString.trim()
        }
    }

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content)
            this.views=views
        }

        view(){
            this.views++;
            return this
        }

        toString(){
            let baseStr= super.toString();
            return `${baseStr}\nViews: ${this.views}`
        }
    }

    return {Post,SocialMediaPost,BlogPost,}
}

