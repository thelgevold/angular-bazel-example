
import { Cmp3555Component } from './cmp';
describe('Cmp3555Component', () => {
  it('should add', () => {
    expect(new Cmp3555Component().add3555(1)).toBe(3556);
  });
});