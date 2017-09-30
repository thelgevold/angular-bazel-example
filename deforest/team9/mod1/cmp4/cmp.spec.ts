
import { Cmp3914Component } from './cmp';
describe('Cmp3914Component', () => {
  it('should add', () => {
    expect(new Cmp3914Component().add3914(1)).toBe(3915);
  });
});