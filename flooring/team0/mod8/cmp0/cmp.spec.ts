
import { Cmp5080Component } from './cmp';
describe('Cmp5080Component', () => {
  it('should add', () => {
    expect(new Cmp5080Component().add5080(1)).toBe(5081);
  });
});