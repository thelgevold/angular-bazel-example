
import { Cmp4624Component } from './cmp';
describe('Cmp4624Component', () => {
  it('should add', () => {
    expect(new Cmp4624Component().add4624(1)).toBe(4625);
  });
});