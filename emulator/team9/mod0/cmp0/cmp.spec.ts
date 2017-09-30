
import { Cmp4900Component } from './cmp';
describe('Cmp4900Component', () => {
  it('should add', () => {
    expect(new Cmp4900Component().add4900(1)).toBe(4901);
  });
});