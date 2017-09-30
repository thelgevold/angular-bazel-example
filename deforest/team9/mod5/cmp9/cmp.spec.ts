
import { Cmp3959Component } from './cmp';
describe('Cmp3959Component', () => {
  it('should add', () => {
    expect(new Cmp3959Component().add3959(1)).toBe(3960);
  });
});