
import { Cmp4904Component } from './cmp';
describe('Cmp4904Component', () => {
  it('should add', () => {
    expect(new Cmp4904Component().add4904(1)).toBe(4905);
  });
});