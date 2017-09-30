
import { Cmp3837Component } from './cmp';
describe('Cmp3837Component', () => {
  it('should add', () => {
    expect(new Cmp3837Component().add3837(1)).toBe(3838);
  });
});