
import { Cmp9522Component } from './cmp';
describe('Cmp9522Component', () => {
  it('should add', () => {
    expect(new Cmp9522Component().add9522(1)).toBe(9523);
  });
});