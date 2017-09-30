
import { Cmp3900Component } from './cmp';
describe('Cmp3900Component', () => {
  it('should add', () => {
    expect(new Cmp3900Component().add3900(1)).toBe(3901);
  });
});