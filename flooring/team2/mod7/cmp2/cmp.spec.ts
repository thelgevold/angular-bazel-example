
import { Cmp5272Component } from './cmp';
describe('Cmp5272Component', () => {
  it('should add', () => {
    expect(new Cmp5272Component().add5272(1)).toBe(5273);
  });
});