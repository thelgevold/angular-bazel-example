
import { Cmp5314Component } from './cmp';
describe('Cmp5314Component', () => {
  it('should add', () => {
    expect(new Cmp5314Component().add5314(1)).toBe(5315);
  });
});