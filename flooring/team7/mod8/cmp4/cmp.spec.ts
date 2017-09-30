
import { Cmp5784Component } from './cmp';
describe('Cmp5784Component', () => {
  it('should add', () => {
    expect(new Cmp5784Component().add5784(1)).toBe(5785);
  });
});