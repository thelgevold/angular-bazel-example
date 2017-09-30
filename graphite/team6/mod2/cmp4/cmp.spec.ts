
import { Cmp6624Component } from './cmp';
describe('Cmp6624Component', () => {
  it('should add', () => {
    expect(new Cmp6624Component().add6624(1)).toBe(6625);
  });
});