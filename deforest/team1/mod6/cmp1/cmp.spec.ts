
import { Cmp3161Component } from './cmp';
describe('Cmp3161Component', () => {
  it('should add', () => {
    expect(new Cmp3161Component().add3161(1)).toBe(3162);
  });
});