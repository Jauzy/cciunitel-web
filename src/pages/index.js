import React from "react"

import Layout from "../Components/Layout"
import SEO from "../Components/Seo"
import Card from '../Components/SteamGame'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import Skeleton from '@material-ui/lab/Skeleton'
import InstagramIcon from '@material-ui/icons/Instagram';

const IndexPage = () => {
  const divisions = [
    {
      name: 'Web Development',
      src: 'https://cciunitel.com/front-website/img/webdev.svg',
      desc: `Web Development CCI Telkom University, adalah salah satu divisi CCI yang berfokus pada pembelajaran pengembangan Website dinamis, baik itu tampilan maupun fungsinya.
      Kita bakal belajar banyak hal disini, mulai dari kode dasar hingga framework. <br/> <br/> Gak bisa ngoding? Jangan takut, kita akan belajar bersama disini. Kami tunggu Kehadiranmu di Web Development.`
    },
    {
      name: 'Design',
      src: 'https://cciunitel.com/front-website/img/design.svg',
      desc: 'Divisi design berfokus pada desain grafis baik itu 2D, 3D, animasi, dan character design. Tertarik dengan desain? Bergabunglah bersama kami.'
    },
    {
      name: 'Media Management',
      src: 'https://cciunitel.com/front-website/img/students.png',
      desc: 'Students News Portal Telkom University, sebagai salah satu portal berita dan cyber media di Universitas Telkom yang mana merupakan bagian dari divisi Media Management CCI.'
    },
    {
      name: 'Data Research',
      src: 'https://cciunitel.com/front-website/img/dr.svg',
      desc: 'Mengolah data dan menjadikannya sebuah informasi yang dapat dimanfaatkan, adalah salah satu hal yang dilakukan dalam Data Research, penasaran apa lagi kegiatan kami? Kami tunggu di Data Research.'
    },
    {
      name: 'Network',
      src: 'https://cciunitel.com/front-website/img/network.svg',
      desc: 'Divisi network berfokus pada pengaturan dan manajemen jaringan komputer sehingga mencapai hasil yang optimal. Selain itu, keamanan jaringan juga menjadi prioritas kami.'
    },
    {
      name: 'Games and Gadget',
      src: 'https://cciunitel.com/front-website/img/gng.svg',
      desc: 'GnG merupakan divisi yang mencari sisi positif dari game seperti proses pembuatan game, membuat review, dan tak lupa juga bermain bersama karena game lebih seru jika dimainkan bersama.'
    }
  ]
  const products = [
    {
      name: 'Student News Portal Telkom University',
      src: 'https://cciunitel.com/front-website/img/students.png',
      desc: 'Students News Portal Telkom University, sebagai salah satu portal berita dan cyber media di Universitas Telkom yang mana merupakan bagian dari divisi Media Management CCI.'
    },
    {
      name: 'CCI Summit',
      src: 'https://cciunitel.com/front-website/img/summit.png',
      desc: 'Sebuah acara dari rangkaian kegiatan workshop, seminar, tournament yang mencakup seluruh divisi pembelajaran CCI dan menjadikan CCI SUMMIT sebagai puncak dari acara CCI.'
    },
    {
      name: 'Araraheng Animation',
      src: 'https://cciunitel.com/front-website/img/araraheng.png',
      desc: 'Araraheng Animation salah satu product CCI di bidang Animasi 2D. Menceritakan kehidupan "sehari-hari" anak perkuliahan. Menceritakan keseharian Yui bersama kelima temannya. Dibuat oleh anggota CCI dari Telkom University. Setiap karakter mewakili Divisi yang berada dalam CCI. Bagaimana kisah kehidupan mereka? bisa di cek di link berikut.'
    },
    {
      name: 'E-vote',
      src: 'https://cciunitel.com/front-website/img/evote.png',
      desc: 'Sebuah sistem pemilihan demokrasi berbasis digital, biasanya digunakan dalam kegiatan pemilihan BEM maupun DPM dan sejenisnya yang mencakup baik itu website maupun jaringan.'
    }
  ]
  const organization = [
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
    {
      name: 'M Abdurrahman Al Jauzy',
      divisi: 'Web Development',
      src: 'http://localhost:8000/static/Joji.png',
      angkatan: '2018',
      jurusan: 'S1 Informatika',
      tags: ['Kadiv', 'Webdev 18']
    },
  ]

  return (
    <Layout>
      <SEO title="Central Computer Improvement" />

      <section id='header' style={{ marginBottom: '5em', marginTop: '7em', padding: '1em 0' }}>
        <Container>

          <Grid container spacing={3} style={{ alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
              <Typography variant='h2' align='left' style={{ fontWeight: 'bold' }} >
                Central Computer Improvement
              </Typography>
              <Typography variant='h6' align='left' color='textSecondary' style={{ margin: '.5em 0' }}>
                Unit Kegiatan Mahasiswa di Telkom University yang berfokus pada bidang ICT (Information, Communication and Technology).
              </Typography>
              <Box style={{ display: 'flex' }}>
                <IconButton color='secondary'>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md>
              <Box style={{ display: 'flex' }}>
                <img src='https://cciunitel.com/front-website/img/cci.png' alt='cci-logo' width='100%' />
              </Box>
            </Grid>
          </Grid>

        </Container>
      </section>

      <section id='divisions'>
        <Paper style={{ padding: '5em 0' }}>
          <Container>
            <Typography variant='h3' align='center' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
              Our Division
            </Typography>
            <Grid container spacing={3}>
              {divisions.map(item => (
                <Grid item xs={12} sm={6} md={4} key={item + 'division'}>
                  <img src={item.src} alt={item.name + 'division'} width='50em' />
                  <Typography gutterBottom variant='h4' style={{ fontWeight: 'bold', marginTop: '.2em' }}>
                    {item.name}
                  </Typography>
                  <Typography variant='body1' color='textSecondary'
                    dangerouslySetInnerHTML={{ __html: item.desc }} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Paper>
      </section>

      <section id='products' style={{ margin: '0 5vw' }}>
        <Grid container spacing={3} style={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Typography variant='h3' style={{ fontWeight: 'bold', margin: '1em 0' }}>
              Products
            </Typography>
            <Grid container spacing={3}>
              {products.map(item => (
                <Grid item xs={12} md={6} key={item.name}>
                  <img src={item.src} alt={item.name + 'division'} width='80em' />
                  <Typography gutterBottom variant='h4' style={{ fontWeight: 'bold', marginTop: '.2em' }}>
                    {item.name}
                  </Typography>
                  <Typography variant='body1' color='textSecondary'
                    dangerouslySetInnerHTML={{ __html: item.desc }} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={require('../../static/images/kawai-cici.png')} width='100%' alt='cici' />
          </Grid>
        </Grid>
      </section>

      <section id='gallery'>
        <Paper style={{ padding: '5em 0' }}>
          <Container>
            <Typography variant='h3' align='center' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
              Gallery
            </Typography>

            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6].map(item => (
                <Grid item xs={12} sm={6} md={4}>
                  <Skeleton variant='rect' width='100%' height='20em' />
                </Grid>
              ))}
            </Grid>

          </Container>
        </Paper>
      </section>

      <section id='news' style={{ margin: '5em 0', padding: '1em 0' }}>
        <Container>
          <Typography variant='h3' align='center' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
            News
          </Typography>

          <Grid container spacing={3}>
            {[1, 2, 3].map(item => (
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant='rect' width='100%' height='20em' />
                <Skeleton variant='text' width='80%' />
                <Skeleton variant='text' width='50%' />
              </Grid>
            ))}
          </Grid>

        </Container>
      </section>

      <section id='organization'>
        <Paper style={{ padding: '5em 0' }}>
          <Container>
            <Typography variant='h3' align='center' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
              Our Organization
            </Typography>

            <Grid container spacing={3}>
              {organization.map(item => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={item.name}>
                  <Card data={item} />
                </Grid>
              ))}
            </Grid>

          </Container>
        </Paper>
      </section>

      <section id='blogs' style={{ margin: '5em 0', padding: '1em 0' }}>
        <Container>
          <Typography variant='h3' align='center' style={{ fontWeight: 'bold', marginBottom: '1em' }}>
            Blogs
          </Typography>

          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant='rect' width='100%' height='20em' />
                <Skeleton variant='text' width='80%' />
                <Skeleton variant='text' width='50%' />
              </Grid>
            ))}
          </Grid>

        </Container>
      </section>

    </Layout>
  )
}

export default IndexPage
