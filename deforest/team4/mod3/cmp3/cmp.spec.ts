
import { Cmp3433Component } from './cmp';
describe('Cmp3433Component', () => {
  it('should add', () => {
    expect(new Cmp3433Component().add3433(1)).toBe(3434);
  });
});