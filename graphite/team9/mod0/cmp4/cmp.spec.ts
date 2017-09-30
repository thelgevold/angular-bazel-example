
import { Cmp6904Component } from './cmp';
describe('Cmp6904Component', () => {
  it('should add', () => {
    expect(new Cmp6904Component().add6904(1)).toBe(6905);
  });
});