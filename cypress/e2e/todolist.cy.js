describe(
    'todo list compiled', ()=> {
        beforeEach(()=>{
            cy.request("DELETE",'http://localhost:8000/api/tasks/reset')
        })
        it('Initial page compiled', ()=>{
            cy.visit('http://localhost:3000/')
            cy.contains('Mi lista de tareas');
        })

        it('Add task', ()=>{
            cy.visit('http://localhost:3000/')
            cy.get('#input-task')
                .type('Nueva tarea bonita');
            cy.get('#form-submit').click();
            cy.get('.label-task').should('contain', 'Nueva tarea bonita');
        })
    }
)