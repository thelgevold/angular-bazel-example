
import { Cmp9990Component } from './cmp';
describe('Cmp9990Component', () => {
  it('should add', () => {
    expect(new Cmp9990Component().add9990(1)).toBe(9991);
  });
});