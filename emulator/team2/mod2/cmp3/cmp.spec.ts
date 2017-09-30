
import { Cmp4223Component } from './cmp';
describe('Cmp4223Component', () => {
  it('should add', () => {
    expect(new Cmp4223Component().add4223(1)).toBe(4224);
  });
});