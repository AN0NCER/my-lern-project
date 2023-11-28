const subject = new rxjs.Subject();

subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});

subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});

const main$ = new rxjs.Subject();

main$.next(true);

main$.subscribe({
    next: (logged_user) => {
        console.log("Стандартное начало программы")
        console.log(logged_user);
    }
})

const observable = rxjs.from([1, 2, 3, main$]);

observable.subscribe(subject);