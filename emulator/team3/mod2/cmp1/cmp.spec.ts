
import { Cmp4321Component } from './cmp';
describe('Cmp4321Component', () => {
  it('should add', () => {
    expect(new Cmp4321Component().add4321(1)).toBe(4322);
  });
});