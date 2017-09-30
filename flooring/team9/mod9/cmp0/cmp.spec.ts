
import { Cmp5990Component } from './cmp';
describe('Cmp5990Component', () => {
  it('should add', () => {
    expect(new Cmp5990Component().add5990(1)).toBe(5991);
  });
});