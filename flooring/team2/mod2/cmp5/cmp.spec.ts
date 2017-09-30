
import { Cmp5225Component } from './cmp';
describe('Cmp5225Component', () => {
  it('should add', () => {
    expect(new Cmp5225Component().add5225(1)).toBe(5226);
  });
});