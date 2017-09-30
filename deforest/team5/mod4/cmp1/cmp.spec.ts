
import { Cmp3541Component } from './cmp';
describe('Cmp3541Component', () => {
  it('should add', () => {
    expect(new Cmp3541Component().add3541(1)).toBe(3542);
  });
});