document.addEventListener("DOMContentLoaded", function () {
    var projectItems = document.querySelectorAll(".project-item");
    if (projectItems) {
        projectItems.forEach(function (item) {
            item.addEventListener("click", function () {
                var target = this.getAttribute("data-target");
                if (target) {
                    window.location.href = target + ".html";
                }
            });
        });
    }
});



function changeExperiencia(option) {
    var textExperiencia = document.querySelector('.text-experiencia');
    var titleExperiencia = textExperiencia.querySelector('.titleExperiencia');
    var changeExperiencia = textExperiencia.querySelector('.changeExperiencia');
    var dateExperiencia = textExperiencia.querySelector('.dateExperiencia');

    if (option === 'estagio') {
        titleExperiencia.textContent = 'Estágio em desenvolvimento front-end';
        dateExperiencia.textContent = 'Out 2021 - Set 2022 (11 meses)';
        changeExperiencia.textContent = 'Durante este período, estive envolvido ativamente no desenvolvimento de aplicações web, utilizando tecnologias essenciais como HTML, SCSS e TypeScript. Com ênfase na aplicação prática do framework Angular, contribuí para a construção de projetos significativos e participei ativamente na resolução de desafios técnicos. Este estágio foi uma valiosa oportunidade de aprendizado e crescimento profissional, onde pude aprimorar minhas habilidades e adquirir experiência prática em um ambiente de trabalho dinâmico e colaborativo.';
    } else if (option === 'dev-front-end') {
        titleExperiencia.textContent = 'Desenvolvedora Front-end JR';
        dateExperiencia.textContent = 'Set 2022 - Abril 2024 (1 ano e 8 meses)';
        changeExperiencia.textContent = 'Durante este período, estive focada no desenvolvimento de landing pages dinâmicas e atrativas, utilizando tecnologias avançadas como Angular, TypeScript e Sass para garantir interfaces modernas e responsivas. Além disso, participei ativamente no desenvolvimento de fluxos de aquisição, implementando integrações de pagamento para assegurar um processo de compra fluido e seguro. Minha contribuição foi significativa para o aprimoramento das funcionalidades da plataforma Mutant Whats, onde utilizei Angular e TypeScript para melhorar a usabilidade e eficiência das soluções desenvolvidas.';
    }
}

window.onload = function() {
    changeExperiencia('dev-front-end');
};