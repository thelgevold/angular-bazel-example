
import { Cmp3904Component } from './cmp';
describe('Cmp3904Component', () => {
  it('should add', () => {
    expect(new Cmp3904Component().add3904(1)).toBe(3905);
  });
});