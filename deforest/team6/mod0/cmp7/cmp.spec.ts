
import { Cmp3607Component } from './cmp';
describe('Cmp3607Component', () => {
  it('should add', () => {
    expect(new Cmp3607Component().add3607(1)).toBe(3608);
  });
});