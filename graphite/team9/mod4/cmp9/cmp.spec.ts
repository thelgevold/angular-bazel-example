
import { Cmp6949Component } from './cmp';
describe('Cmp6949Component', () => {
  it('should add', () => {
    expect(new Cmp6949Component().add6949(1)).toBe(6950);
  });
});