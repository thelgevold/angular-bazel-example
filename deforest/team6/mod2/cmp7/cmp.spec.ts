
import { Cmp3627Component } from './cmp';
describe('Cmp3627Component', () => {
  it('should add', () => {
    expect(new Cmp3627Component().add3627(1)).toBe(3628);
  });
});