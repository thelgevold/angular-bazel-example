
import { Cmp5863Component } from './cmp';
describe('Cmp5863Component', () => {
  it('should add', () => {
    expect(new Cmp5863Component().add5863(1)).toBe(5864);
  });
});