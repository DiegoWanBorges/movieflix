INSERT INTO tb_user (name,email,password) VALUES ('Bob','bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name,email,password) VALUES ('Ana','ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

insert into tb_genre(name) values('Ação');
insert into tb_genre(name) values('Terror');
insert into tb_genre(name) values('Ficção');
insert into tb_genre(name) values('Drama');

insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('Mad Max','Estrada da Fúria','Em um mundo pós-apocalíptico, Max Rockatansky acredita que a melhor forma de sobreviver é não depender de ninguém. Porém, após ser capturado pelo tirano Immortan Joe e seus rebeldes, Max se vê no meio de uma guerra mortal iniciada pela Imperatriz Furiosa, que tenta salvar um grupo de garotas. Também tentando fugir, Max aceita ajudar Furiosa.',2015,'https://i2.wp.com/escutaessareview.com.br/wp-content/uploads/2015/05/cover3.jpg',1);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('A Viagem','Tudo está conectado','Várias histórias são desenroladas em diferentes linhas de tempo, mas mesmo sendo independentes e se desenvolvendo ao longo de cinco séculos, todas estão relacionadas e algumas têm impacto sobre outras, entrelaçando drama, mistério, ação e amor',2012,'http://3.bp.blogspot.com/-2RTdBXlTOik/UTgFWpg5mxI/AAAAAAAAAn4/xiSdvUL1aT0/s1600/a+viagem+cloud+atlas.jpg',4);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('Jurassic Park','Parque dos Dinossauros','Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça.',1993,'https://m.media-amazon.com/images/I/61wJgm2iIiL.jpg',3);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('Jurassic Park','O Mundo Perdido','John Hammond chama o teórico do caos Ian Malcolm à sua casa para dar algumas notícias aterradoras: enquanto quase tudo em Jurassic Park foi destruído, seus engenheiros parecem ter um segundo local, onde outros dinossauros estão escondidos. Aparentemente, os dinossauros na segunda ilha estão vivos e bem e até se acasalando. Hammond quer que Malcolm observe e documente as criaturas antes que mercenários cheguem até eles.',1997,'https://assets.caixabelasartes.com.br/wp-content/uploads/2015/10/jurassic-park-ii-the-lost-world.33080.jpg',3);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('Jurassic Park III','','O agora famoso paleontólogo Alan Grant é convencido por um rico empresário e a mulher dele a realizar uma excursão aérea pela Ilha Sorna. Nela, dinossauros clonados vivem em liberdade e são estudados no ambiente natural. Mas um acidente com o avião faz com que o grupo de sete pessoas fique encalhado na perigosa ilha. Cercados por carnívoros famintos, os visitantes tentam escapar do lugar e salvar suas próprias vidas.',2001,'https://upload.wikimedia.org/wikipedia/pt/7/75/Jurassic_Park_3_poster.jpg',3);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('Donnie Darko','Why are you wearing that stupid man suit?','Donnie é um jovem excêntrico que despreza a grande maioria de seus colegas de escola. Ele tem visões, em especial de Frank, um coelho gigante que só ele consegue ver e que o encoraja a fazer brincadeiras humilhantes com quem o cerca. Um dia, uma de suas visões o atrai para fora de casa e lhe diz que o mundo acabará dentro de um mês. Donnie inicialmente não acredita, mas, momentos depois, a turbina de um avião cai em sua casa e ele começa a se perguntar qual é o fundo de verdade dessa previsão.',2001,'https://cdn.maioresemelhores.com/imagens/maiores-curiosidades-sobre-donnie-darko-og.jpg',2);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('O Senhor dos Anéis','A Sociedade do Anel','Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.',2001,'https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg',3);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('O Senhor dos Anéis','As Duas Torres','Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.',2002,'http://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg',3);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('O Senhor dos Anéis','O Retorno do Rei','O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.',2003,'http://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg',3);
insert into tb_movie(title,sub_title,synopsis,year,img_url,genre_id)values('Interestelar','','As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',2014,'https://2.bp.blogspot.com/-xWXp4LQ0nVQ/VC1D2aOpFmI/AAAAAAAAAG4/fvDpivA4e_w/s1600/interstellar_new_poster.jpg',3);

insert into tb_review(text,movie_id,user_id)values('O melhor filme de ação',1,2);
insert into tb_review(text,movie_id,user_id)values('O melhor filme de ação, esperando continuação',1,2);
insert into tb_review(text,movie_id,user_id)values('Nota 1000',1,2);
insert into tb_review(text,movie_id,user_id)values('Otimo filme, com um elenco espetacular!',1,2);




