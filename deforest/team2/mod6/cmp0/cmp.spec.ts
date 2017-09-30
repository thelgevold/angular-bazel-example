
import { Cmp3260Component } from './cmp';
describe('Cmp3260Component', () => {
  it('should add', () => {
    expect(new Cmp3260Component().add3260(1)).toBe(3261);
  });
});