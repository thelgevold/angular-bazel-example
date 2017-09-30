
import { Cmp9781Component } from './cmp';
describe('Cmp9781Component', () => {
  it('should add', () => {
    expect(new Cmp9781Component().add9781(1)).toBe(9782);
  });
});