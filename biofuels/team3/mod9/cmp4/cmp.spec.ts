
import { Cmp1394Component } from './cmp';
describe('Cmp1394Component', () => {
  it('should add', () => {
    expect(new Cmp1394Component().add1394(1)).toBe(1395);
  });
});