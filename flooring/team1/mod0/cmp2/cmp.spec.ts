
import { Cmp5102Component } from './cmp';
describe('Cmp5102Component', () => {
  it('should add', () => {
    expect(new Cmp5102Component().add5102(1)).toBe(5103);
  });
});