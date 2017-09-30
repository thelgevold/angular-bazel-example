
import { Cmp9261Component } from './cmp';
describe('Cmp9261Component', () => {
  it('should add', () => {
    expect(new Cmp9261Component().add9261(1)).toBe(9262);
  });
});