
import { Cmp3023Component } from './cmp';
describe('Cmp3023Component', () => {
  it('should add', () => {
    expect(new Cmp3023Component().add3023(1)).toBe(3024);
  });
});