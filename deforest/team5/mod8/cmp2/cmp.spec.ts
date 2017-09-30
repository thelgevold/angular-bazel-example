
import { Cmp3582Component } from './cmp';
describe('Cmp3582Component', () => {
  it('should add', () => {
    expect(new Cmp3582Component().add3582(1)).toBe(3583);
  });
});