
import { Cmp4880Component } from './cmp';
describe('Cmp4880Component', () => {
  it('should add', () => {
    expect(new Cmp4880Component().add4880(1)).toBe(4881);
  });
});