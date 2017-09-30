
import { Cmp4825Component } from './cmp';
describe('Cmp4825Component', () => {
  it('should add', () => {
    expect(new Cmp4825Component().add4825(1)).toBe(4826);
  });
});