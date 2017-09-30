
import { Cmp3805Component } from './cmp';
describe('Cmp3805Component', () => {
  it('should add', () => {
    expect(new Cmp3805Component().add3805(1)).toBe(3806);
  });
});