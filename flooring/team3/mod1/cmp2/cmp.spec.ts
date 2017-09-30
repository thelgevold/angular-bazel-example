
import { Cmp5312Component } from './cmp';
describe('Cmp5312Component', () => {
  it('should add', () => {
    expect(new Cmp5312Component().add5312(1)).toBe(5313);
  });
});