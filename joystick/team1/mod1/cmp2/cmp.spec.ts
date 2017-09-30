
import { Cmp9112Component } from './cmp';
describe('Cmp9112Component', () => {
  it('should add', () => {
    expect(new Cmp9112Component().add9112(1)).toBe(9113);
  });
});