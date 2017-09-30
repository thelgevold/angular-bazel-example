
import { Cmp5017Component } from './cmp';
describe('Cmp5017Component', () => {
  it('should add', () => {
    expect(new Cmp5017Component().add5017(1)).toBe(5018);
  });
});