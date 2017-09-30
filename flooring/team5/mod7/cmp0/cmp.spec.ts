
import { Cmp5570Component } from './cmp';
describe('Cmp5570Component', () => {
  it('should add', () => {
    expect(new Cmp5570Component().add5570(1)).toBe(5571);
  });
});