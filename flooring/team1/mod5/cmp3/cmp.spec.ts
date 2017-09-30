
import { Cmp5153Component } from './cmp';
describe('Cmp5153Component', () => {
  it('should add', () => {
    expect(new Cmp5153Component().add5153(1)).toBe(5154);
  });
});