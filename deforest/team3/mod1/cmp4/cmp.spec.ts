
import { Cmp3314Component } from './cmp';
describe('Cmp3314Component', () => {
  it('should add', () => {
    expect(new Cmp3314Component().add3314(1)).toBe(3315);
  });
});