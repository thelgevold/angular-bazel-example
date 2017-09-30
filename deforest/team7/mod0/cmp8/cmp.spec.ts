
import { Cmp3708Component } from './cmp';
describe('Cmp3708Component', () => {
  it('should add', () => {
    expect(new Cmp3708Component().add3708(1)).toBe(3709);
  });
});